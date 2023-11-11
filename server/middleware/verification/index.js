import axios from "axios";

const apiKey =
  "lhUfnmHBtW3DvVsQJgex2MLTcZXN6kPOaEo8iF1j7d4SAbR5wrMCE8ZeuR4LWgNKrV5DnJsqImxStAHb";

// Controller for sending OTP

const verification = {
  sendOTP: async (req, res) => {
    const { mobileNumber } = req.body;

    try {
      if (!mobileNumber) {
        return res.status(400).json({ message: "Mobile number is required" });
      }

      const otp = Math.floor(100000 + Math.random() * 900000);
      const response = await axios.get("https://www.fast2sms.com/dev/bulk", {
        params: {
          authorization: apiKey,
          variables_values: `Your OTP is ${otp}`,
          route: "otp",
          numbers: mobileNumber,
        },
      });
      res.json({ success: true, message: "OTP sent successfully!" });
    } catch (error) {
      console.error("Error sending OTP:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send OTP.", error });
    }
  },

  // Controller for verifying OTP
  verifyOTP: async (req, res) => {
    const { mobileNumber, otp } = req.body;

    try {
      const response = await axios.get("https://www.fast2sms.com/dev/verify", {
        params: {
          authorization: apiKey,
          otp,
          mobile: mobileNumber,
        },
      });

      if (response.data.return === true) {
        res.json({ success: true, message: "OTP verified successfully" });
      } else {
        res.json({ success: false, message: "Invalid OTP" });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ success: false, message: "Failed to verify OTP" });
    }
  },
};

export default verification;
