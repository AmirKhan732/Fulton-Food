import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoBack from "../components/GoBack";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="">
     <GoBack/>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="d-flex flex-row col-10 bg-white rounded p-2">
          <div
            className="col-md-4 rounded slug-desc"
            style={{ backgroundColor: " #787878" }}
          >
            <h3 className="text-white p-4">Contact Us</h3>
            <div className="p-4 text-white ">
              <h4 className="pt-5">
                <i class="bi bi-telephone-inbound me-4"></i> 123-456-7890
              </h4>
              <h4 className="py-5">
                <i className="bi bi-envelope-at-fill me-4"></i>
                info@flutonfoods.com
              </h4>
              <h4 className="pb-5">
                <i className="bi bi-geo-alt-fill me-4"></i> 47B Street, New
                York, USA
              </h4>
            </div>
          </div>
          <div className="col-md-8 p-4">
            <h3 className="mb-4 text-center">Send Us a Message</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="d-flex gap-2">
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="filled"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="filled"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                variant="filled"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />
              <div className="d-flex justify-content-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#ff9f0d" }}
                >
                  Send Message
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
