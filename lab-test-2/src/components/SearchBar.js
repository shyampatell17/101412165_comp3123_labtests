import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setCity(input.trim());
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
            <div className="input-group">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control"
                    placeholder="Enter city name"
                    aria-label="City"
                />
                <button type="submit" className="btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
