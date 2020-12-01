const SuppliersService = require("./suppliers.service.js");

function supplierExists(req, res, next) {
  const error = { status: 404, message: `Supplier cannot be found.` };
  const { supplierId } = req.params;
  if (!supplierId) return next(error);

  SuppliersService.getSupplierById(supplierId).then(supplier => {
    if (!supplier) return next(error);
    res.locals.supplier = supplier;
    next();
  });
}

function create(req, res, next) {
  SuppliersService.createSupplier(req.body.data).then(newSupplier =>
    res.status(201).json({ data: newSupplier })
  );
}

function update(req, res, next) {
  const {
    supplier: { supplier_id: supplierId, ...supplier },
  } = res.locals;
  const updatedSupplier = { ...supplier, ...req.body.data };

  SuppliersService.updateSupplierById(
    supplierId,
    updatedSupplier
  ).then(updatedSupplier => res.json({ data: updatedSupplier }));
}

function destroy(req, res, next) {
  const { supplier } = res.locals;
  SuppliersService.deleteSupplierById(supplier.supplier_id).then(() =>
    res.sendStatus(204)
  );
}

module.exports = {
  create: [create],
  update: [supplierExists, update],
  destroy: [supplierExists, destroy],
};
