import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: "Token não informado" });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET as string) as PayLoad;
    request.user_id = sub;
    return next();
  } catch (err) {
    console.error("Erro na validação do token:", err);
    return response.status(401).json({ message: "Token inválido ou expirado" });
  }
}
