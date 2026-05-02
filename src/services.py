class FabricService:
    def _init_(self):
        self.fabrics = []

    def add_fabric(self, fabric):
        self.fabrics.append(fabric)

    def send_to_quality_control(self, fabric):
        fabric.state.send_to_quality_control(fabric)

    def approve_quality(self, fabric):
        fabric.state.approve_quality(fabric)
        fabric.supplier.record_delivery(True)

    def reject_quality(self, fabric):
        fabric.state.reject_quality(fabric)
        fabric.supplier.record_delivery(False)

    def send_to_cutting(self, fabric, meter, model_name):
        if fabric.state.name() != "Approved":
            print("Only approved fabric can be sent to cutting.")
            return None

        fabric.state.send_to_cutting(fabric)
        fabric.use_fabric(meter)

        plan = CuttingPlan(model_name, fabric, meter)
        fabric.add_history(f"Cutting plan created. Model: {model_name}")

        return plan

    def send_to_production(self, fabric):
        fabric.state.send_to_production(fabric)

    def complete_production(self, fabric):
        fabric.state.complete_production(fabric)

    def show_inventory(self):
        print("\nINVENTORY LIST")
        for fabric in self.fabrics:
            fabric.show_info()

    def show_stock_by_type(self):
        stock = {}

        for fabric in self.fabrics:
            if fabric.fabric_type not in stock:
                stock[fabric.fabric_type] = 0

            stock[fabric.fabric_type] += fabric.available_meter()

        print("\nSTOCK BY FABRIC TYPE")
        for fabric_type, meter in stock.items():
            print(fabric_type, ":", meter, "meters")


class SupplierService:
    def _init_(self):
        self.suppliers = []

    def add_supplier(self, supplier):
        self.suppliers.append(supplier)

    def show_supplier_performance(self):
        print("\nSUPPLIER PERFORMANCE")

        for supplier in self.suppliers:
            print("--------------------------------")
            print("Supplier:", supplier.name)
            print("Total Deliveries:", supplier.total_deliveries)
            print("Approved Deliveries:", supplier.approved_deliveries)
            print("Rejected Deliveries:", supplier.rejected_deliveries)
            print("Quality Score:", round(supplier.quality_score(), 2), "%")
            print("--------------------------------")
