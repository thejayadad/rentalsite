import db from "@/lib/db";
import { verifyJwtToken, verifyToken } from '@/lib/jwt'
import Ride from "@/models/Ride";

export async function GET(req) {
    await db.connect()

    try {
        const rides = await Ride.find({})
        return new Response(JSON.stringify(rides), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST(req) {
    await db.connect()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const newRide = await Ride.create(body)

        return new Response(JSON.stringify(newRide), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
