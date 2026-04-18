import { useState } from "react";

const AttendanceGuests = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: null,
    guestCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setMessage({ type: "error", text: "Խնդրում ենք լրացնել Ձեր անունը:" });
      return;
    }
    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք ընտրել տարբերակներից մեկը:",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Օգտագործիր քո վերջին ստացված Deployment URL-ը
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzAoSyOHriVy9ZaVPfuz-8UYk1-wdEe8BUhOJwV_1Pc4FGhmin1hirkAKbz2Iy2Boe7aQ/exec";

      const payload = {
        name: formData.name,
        attending: formData.attending ? "Այո" : "Ոչ",
        guestCount: formData.attending ? formData.guestCount : 0,
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload), // Ուղարկում ենք որպես JSON
      });

      setMessage({
        type: "success",
        text: "Շնորհակալություն, Ձեր պատասխանը գրանցված է:",
      });
      setFormData({ name: "", attending: null, guestCount: "" });
    } catch (err) {
      setMessage({ type: "error", text: "Տեղի է ունեցել սխալ:" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "450px",
            width: "100%",
            padding: "35px",
            backgroundColor: "#fff",
            borderRadius: "28px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>Կմասնակցե՞ք մեր միջոցառմանը</h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="text"
              placeholder="Ձեր անունը"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                padding: "15px",
                borderRadius: "12px",
                border: "1.5px solid #eee",
                fontSize: "16px",
                outline: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "left",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "18px",
                  border:
                    formData.attending === true
                      ? "2px solid #000"
                      : "1.5px solid #eee",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  checked={formData.attending === true}
                  onChange={() => setFormData({ ...formData, attending: true })}
                />
                <span style={{ marginLeft: "12px" }}>Այո, սիրով</span>
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "18px",
                  border:
                    formData.attending === false
                      ? "2px solid #000"
                      : "1.5px solid #eee",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  checked={formData.attending === false}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      attending: false,
                      guestCount: "",
                    })
                  }
                />
                <span style={{ marginLeft: "12px" }}>Ոչ, չեմ կարող</span>
              </label>
            </div>

            {formData.attending === true && (
              <input
                type="number"
                value={formData.guestCount}
                onChange={(e) =>
                  setFormData({ ...formData, guestCount: e.target.value })
                }
                placeholder="Հյուրերի քանակը"
                style={{
                  padding: "10px",
                  borderBottom: "2px solid #000",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "18px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Ուղարկվում է..." : "Հաստատել"}
            </button>

            {message.text && (
              <div
                style={{
                  color: message.type === "success" ? "green" : "red",
                  marginTop: "10px",
                }}
              >
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
      <h2 className="text-center" style={{marginBottom: "20px"}}>
        Սիրով՝ <br /> Վահե և Գայանե
      </h2>
    </>
  );
};

export default AttendanceGuests;
