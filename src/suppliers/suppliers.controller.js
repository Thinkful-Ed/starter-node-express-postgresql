const suppliersService = require("./suppliers.service.js");

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

// Resource Queries ====================================================================================

async function create(req, res, next) {
  res.status(201).json({ data: { supplier_name: "new supplier" } });
}

async function update(req, res, next) {
  res.json({ data: { supplier_name: "updated supplier" } });
}

async function destroy(req, res, next) {
  res.sendStatus(204);
}

module.exports = {
  create: [hasValidProperties],
  update,
  delete: destroy,
};
