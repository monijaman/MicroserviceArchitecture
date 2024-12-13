import { config } from "@/config";
import sequelize from "@/database/connection";
import userRoutes from "@/routes/user.route";
import express, { Application } from "express";

const { PORT } = config;

const app: Application = express();

app.use(express.json());

// Test database connection before starting the server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");

    // Syncing after successful connection
    sequelize
      .sync({ force: false }) // Consider using migrations for production
      .then(() => {
        console.log("Database synced successfully");
        // Start server only after successful sync
        app.listen(PORT, () => {
          console.log(`Server running on http://localhost:${PORT}`);
        });
      })
      .catch((err) => console.error("Error syncing database:", err));
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Initialize routes
app.use("/api", userRoutes);

export default app;
