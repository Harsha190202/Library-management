"use client";

import { useState, useEffect } from "react";

interface Item {
  id: number;
  itemtype: string;
}

export default function Types() {
  const [type, setType] = useState<string>("");
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/admin/get-types");
        const result: Item[] = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/admin/add-type", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemtype: type }),
      });
      const newItem: Item = await res.json();
      setData((prevData) => [...prevData, newItem]);
      setType("");
    } catch (error) {
      console.error("Error adding new type:", error);
    }
  };

  return (
    <section>
      <div>
        <h1>Give an input to place into types</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setType(e.target.value)} placeholder="Insert a TYPE of item" value={type} />
          <button type="submit">Insert</button>
        </form>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.itemtype}</div>
        ))}
      </div>
    </section>
  );
}
