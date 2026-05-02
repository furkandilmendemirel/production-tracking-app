from abc import ABC, abstractmethod


class FabricState(ABC):
    @abstractmethod
    def name(self):
        pass

    @abstractmethod
    def next_state(self):
        pass

    @abstractmethod
    def badge_color(self):
        pass


class PendingState(FabricState):
    def name(self):
        return "Pending"

    def next_state(self):
        return ProcessingState()

    def badge_color(self):
        return "Yellow"


class ProcessingState(FabricState):
    def name(self):
        return "Processing"

    def next_state(self):
        return QualityCheckState()

    def badge_color(self):
        return "Orange"


class QualityCheckState(FabricState):
    def name(self):
        return "Quality Check"

    def next_state(self):
        return CompletedState()

    def badge_color(self):
        return "Blue"


class CompletedState(FabricState):
    def name(self):
        return "Completed"

    def next_state(self):
        return self

    def badge_color(self):
        return "Green"


def create_state(status):
    if status == "Pending":
        return PendingState()

    if status == "Processing":
        return ProcessingState()

    if status == "Quality Check":
        return QualityCheckState()

    if status == "Completed":
        return CompletedState()

    return PendingState()
