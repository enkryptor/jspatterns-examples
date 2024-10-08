class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

const observable = new Observable();

// ================================================

function logger(data) {
    console.log(`${Date.now()} ${data}`);
}


function toastify(data) {
    toast(data, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeButton: false,
        autoClose: 2000
    });
}

observable.subscribe(logger);

observable.subscribe(toastify);

// ================================================

import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

function handleClick() {
    observable.notify("User clicked button!");
}

function handleToggle() {
    observable.notify("User toggled switch!");
}

export default function App() {
    return (
        <div className="App">
            <Button variant="contained" onClick={handleClick}>
                Click me!
            </Button>
            <FormControlLabel
                control={<Switch name="" onChange={handleToggle} />}
                label="Toggle me!"
            />
            <ToastContainer />
        </div>
    );
}
