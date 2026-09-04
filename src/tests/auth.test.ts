import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";


describe("getAPIKey tests", () => {
  test("getAPIKey basic flow", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc123",
    };
    expect(getAPIKey(headers)).toBe("abc123");
  });

  test("getAPIKey missing authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBe(null);
  });

  test("getAPIKey malformed authorization header (missing key)", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBe("null");
  });

  test("getAPIKey wrong auth scheme", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };
    expect(getAPIKey(headers)).toBe(null);
  });
});
