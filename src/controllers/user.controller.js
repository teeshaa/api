import {
  pool,
  userExistsQuery,
  insertUserQuery,
} from "../queries/user.queries";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the username or email already exists in the database
    const userExistsResult = await pool.query(userExistsQuery, [
      username,
      email,
    ]);

    if (userExistsResult.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // If the username and email are unique, insert the new user into the database
    const insertedUser = await pool.query(insertUserQuery, [
      username,
      email,
      password,
    ]);

    res
      .status(201)
      .json({
        message: "User registered successfully.",
        user: insertedUser.rows[0],
      });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
