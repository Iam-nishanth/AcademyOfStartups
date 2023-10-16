import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: true, message: "Token is required for Authentication" });
    } else {
        try {
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || " ");

            req.body.decodedToken = decodedToken;
            next();
        } catch (err) {
            return res.status(401).json({ error: true, message: err.message });
        }
    }
}

export default verifyToken