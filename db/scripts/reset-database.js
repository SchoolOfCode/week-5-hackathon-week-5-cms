import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS books CASCADE;
      DROP TABLE IF EXISTS members CASCADE;
      DROP TABLE IF EXISTS loans CASCADE;
    `);


    // Create the books table 
    await pool.query(`
      CREATE TABLE books (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        book_id INT,
        title VARCHAR(255) NOT NULL,
        author VARCHAR (255) NOT NULL,
        genre VARCHAR (255) NOT NULL,
        published_year INT,
      );
    `);
    
    // Create the members table 
    await pool.query(`
        CREATE TABLE members (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          member_id INT,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          membership_date DATE,
        );
      `);

    // Create the loans table 
    await pool.query(`
        CREATE TABLE loans (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          loan_id INT,
          book_id INT,
          member_id INT,
          loan_date DATE
          return_date DATE,
        );
      `);
    

    // Seed the books table
    await pool.query(`
      INSERT INTO books (book_id, title, author, genre, published_year)
      VALUES 
        (1, 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960),
        (2, '1984', 'George Orwell', 'Dystopian', 1949),
        (3, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925),
        (4, 'The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951),
        (5, 'Pride and Prejudice', 'Jane Austen', 'Romance', 1813);
    `);

     // Seed the members table
     await pool.query(`
        INSERT INTO members (member_id, name, email, membership_date)
        VALUES 
          (1, 'John Doe', 'john.doe@example.com', '2023-01-15'),
          (2, 'Jane Smith', 'jane.smith@example.com', '2023-02-20'),
          (3, 'Alice Johnson', 'alice.johnson@example.com', '2023-03-10'),
          (4, 'Bob Brown', 'bob.brown@example.com', '2023-04-05'),
          (5, 'Charlie Davis', 'charlie.davis@example.com', '2023-05-25');
      `);

      // Seed the loans table
     await pool.query(`
        INSERT INTO loans (loan_id, book_id, member_id, loan_date, return_date)
        VALUES 
          (1, 1, 1, '2024-10-01', '2024-11-15'),
          (2, 2, 2, '2024-10-05', '2024-12-20'),
          (3, 3, 3, '2024-12-05', '2025-01-10'),
          (4, 4, 4, '2024-11-15', '2024-11-30'),
          (5, 5, 5, '2024-12-20', '2025-01-10');
      `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
