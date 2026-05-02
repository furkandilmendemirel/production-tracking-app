import uuid


class Supplier:
    def __init__(self, name):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.total_deliveries = 0
        self.completed_deliveries = 0

    def record_delivery(self):
        self.total_deliveries += 1

    def record_completed_delivery(self):
        self.completed_deliveries += 1

    def performance_score(self):
        if self.total_deliveries == 0:
            return 0

        return (self.completed_deliveries / self.total_deliveries) * 100
