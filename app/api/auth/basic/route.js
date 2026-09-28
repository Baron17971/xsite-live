import { NextResponse } from 'next/server';

export async function POST(request){
  try{
    const {username,password}=await request.json();
    const expectedUser=process.env.BASIC_AUTH_USERNAME;
    const expectedPassword=process.env.BASIC_AUTH_PASSWORD;

    if(!expectedUser || !expectedPassword){
      return NextResponse.json(
        {error:'התחברות בשם משתמש וסיסמה עדיין לא הוגדרה.'},
        {status:503}
      );
    }

    if(username !== expectedUser || password !== expectedPassword){
      return NextResponse.json(
        {error:'שם המשתמש או הסיסמה אינם נכונים.'},
        {status:401}
      );
    }

    return NextResponse.json({ok:true,name:username});
  }catch{
    return NextResponse.json(
      {error:'לא הצלחנו לבצע את ההתחברות.'},
      {status:400}
    );
  }
}
