import argon2 from "argon2";
import db from "../config/db.js";

export async function signup(req, res) {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
    } = req.body;

    const normalizedEmail = email.trim().toLowerCase();

    const [existing] = await db.execute(
      `
      SELECT id
      FROM users
      WHERE email = ?
      LIMIT 1
      `,
      [normalizedEmail],
    );

    if (existing.length > 0) {
      return res.status(409).json({
        error: "An account with this email already exists.",
      });
    }

    const passwordHash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 19456,
      timeCost: 2,
      parallelism: 1,
    });

    const [result] = await db.execute(
      `
      INSERT INTO users (
        email,
        password_hash,
        first_name,
        last_name
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        normalizedEmail,
        passwordHash,
        firstName.trim(),
        lastName.trim(),
      ],
    );

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({
          error: "Unable to create session.",
        });
      }

      req.session.userId = result.insertId;

      return res.status(201).json({
        user: {
          id: result.insertId,
          email: normalizedEmail,
          firstName,
          lastName,
        },
      });
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Unable to create account.",
    });
  }
}