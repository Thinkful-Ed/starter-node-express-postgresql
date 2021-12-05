const suppliersService = require("./suppliers.service.js");
const hasProperties = require("../errors/hasProperties");

// Middlewares =============================================================================================================

const VALID_PROPERTIES = [
  "supplier_name",
  "supplier_address_line_1",
  "supplier_address_line_2",
  "supplier_city",
  "supplier_state",
  "supplier_zip",
  "supplier_phone",
  "supplier_email",
  "supplier_notes",
  "supplier_type_of_goods",
];

const hasRequiredProperties = hasProperties("supplier_name", "supplier_email");

// Check for valid field properties
const hasValidProperties = (req, res, next) => {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (property) => !VALID_PROPERTIES.includes(property)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
};

const supplierExists = (req, res, next) => {
  suppliersService
    .read(req.params.supplierId)
    .then((supplier) => {
      if (supplier) {
        res.locals.supplier = supplier;
        return next();
      }
      next({ status: 404, message: `Supplier cannot be found.` });
    })
    .catch(next);
};

// Resource Queries ====================================================================================

const create = (req, res, next) => {
  suppliersService
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
};

const update = (req, res, next) => {
  const updatedSupplier = {
    ...req.body.data,
    supplier_id: res.locals.supplier.supplier_id,
  };

  console.log("updatedSupplier:", updatedSupplier);

  suppliersService
    .update(updatedSupplier)
    .then((data) => res.json({ data }))
    .catch(next);
};

const destroy = (req, res, next) => {
  suppliersService
    .destroy(res.locals.supplier.supplier_id)
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = {
  create: [hasValidProperties, hasRequiredProperties, create],
  update: [supplierExists, hasValidProperties, hasRequiredProperties, update],
  delete: [supplierExists, destroy],
};
