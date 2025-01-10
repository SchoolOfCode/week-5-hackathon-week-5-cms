import { pool } from "../db/index.js";

export async function fetchAllMembers() {
//query the database
//fetch all members
//return the all members
//store them in a variable

const allMembers = await pool.query(
    'SELECT * FROM members'
    );

return allMembers.rows;
}

export async function fetchMemberById(id) {
    //query the database using ID
    //fetch member by his unique id
    //return the member
    //store in variable

    const allMembers = await pool.query(
        'SELECT * FROM members WHERE id = $1', [id]
    );

    return allMembers.rows
}

export async function insertMember(member_id, name, email, membership_date) {
    //into the database
    //create a variable to store the new member and values
    // return new member
    const newMember = await pool.query('INSERT INTO members(member_id, name, email, membership_date) VALUES ($1, $2, $3, $4) RETURNING *',[member_id, name, email, membership_date]);
    return newMember.rows
}

export async function modifyMemberById(id, member_id, name, email, membership_date) {}

export async function removeMemberById(id) {}
