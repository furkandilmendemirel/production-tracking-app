class FabricState:
    def next_stage(self, fabric):
        pass

    def get_status(self):
        pass


class ReceivedState(FabricState):
    def next_stage(self, fabric):
        fabric.state = ProducedState()

    def get_status(self):
        return "Received"


class ProducedState(FabricState):
    def next_stage(self, fabric):
        fabric.state = DyedState()

    def get_status(self):
        return "Produced"


class DyedState(FabricState):
    def next_stage(self, fabric):
        fabric.state = QualityCheckedState()

    def get_status(self):
        return "Dyed"


class QualityCheckedState(FabricState):
    def next_stage(self, fabric):
        fabric.state = ShippedState()

    def get_status(self):
        return "Quality Checked"


class ShippedState(FabricState):
    def next_stage(self, fabric):
        print("This fabric is already shipped. No next stage.")

    def get_status(self):
        return "Shipped"
