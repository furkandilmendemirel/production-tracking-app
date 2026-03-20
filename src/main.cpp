#include <iostream>
#include <string>

using namespace std;

class Fabric;

class FabricState {
public:
    virtual void handle(Fabric* fabric) = 0;
};

class Fabric {
private:
    FabricState* state;

public:
    Fabric(FabricState* initialState) {
        state = initialState;
    }

    void setState(FabricState* newState) {
        state = newState;
    }

    void request() {
        state->handle(this);
    }
};

class ProducedState : public FabricState {
public:
    void handle(Fabric* fabric) {
        cout << "Fabric has been produced. Sending to dyeing stage." << endl;
    }
};

class DyedState : public FabricState {
public:
    void handle(Fabric* fabric) {
        cout << "Fabric has been dyed. Moving to quality check." << endl;
    }
};

class QualityCheckState : public FabricState {
public:
    void handle(Fabric* fabric) {
        cout << "Fabric is under quality inspection." << endl;
    }
};

class ShippedState : public FabricState {
public:
    void handle(Fabric* fabric) {
        cout << "Fabric has been shipped to the store." << endl;
    }
};

int main() {

    ProducedState produced;
    DyedState dyed;
    QualityCheckState qc;
    ShippedState shipped;

    Fabric fabric(&produced);

    fabric.request();

    fabric.setState(&dyed);
    fabric.request();

    fabric.setState(&qc);
    fabric.request();

    fabric.setState(&shipped);
    fabric.request();
}
//added state pattern implementation
