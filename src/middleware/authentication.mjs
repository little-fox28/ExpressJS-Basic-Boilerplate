function Authenticate(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    return next();
}

export default Authenticate;
