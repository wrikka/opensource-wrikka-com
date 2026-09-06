import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import type { Router } from "../server/router";

const link = new RPCLink({
	url: `${globalThis.location?.origin ?? ""}/rpc`,
});

export const orpc: RouterClient<Router> = createORPCClient(link);
