import { useState } from "react";

export default function App() {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    return (
        <div className="App">
            <label>
                Checkbox:
                <input
                    name="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                        if (checked) {
                            setText('');
                        }
                        setChecked(!checked);
                    }
                    }
                />
            </label>
            <label>
                Input:
                <input
                    name="input"
                    type="text"
                    disabled={!checked}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
        </div>
    );
}
