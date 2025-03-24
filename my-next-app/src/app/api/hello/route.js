import { NextResponse } from "next/server";

export async function GET(request) {
  try {

    //テスト用
    if (Math.random() < 0.5) {
      throw new Error("意図的なエラー");
    }

    const data = { 
      message: "Hello, world!" ,
      timestamp: new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
      status: "success"
    };

    return NextResponse.json(data, {status: 200});
  }catch(error){
    return NextResponse.json(
      {
        message: "サーバーエラーが発生しました",
        timestamp: "エラーにより取得できませんでした",
        status: "error",
      },
      {status: 500}
    )
  };
  
}
