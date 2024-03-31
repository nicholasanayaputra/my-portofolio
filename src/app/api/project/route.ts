import { data } from "@/lib/data/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    if(id) {
        const detailProject = data.find((item) => item.id === Number(id));
        if(detailProject) {
            return NextResponse.json({
                status:200,
                message:"Success",
                data: detailProject,
            })
        }
        return NextResponse.json({
            status:404,
            message:"Not Found",
            data: {},
        })
    }

    return NextResponse.json({status:200, massage: "Success", data})
}