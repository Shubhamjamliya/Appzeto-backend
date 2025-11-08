export default function (req, res, next) {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Unauthorized Access ONly admin can access!!" });

  next();
}
