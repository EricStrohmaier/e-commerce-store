import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skBkyy1i4GCGQyIPTjEwOXYy1AYFFFe7h3vbhFzGeq3sIgMb76QcbLIvwd1ylh6EKFjujl2iqKfoneVAYpbUJQcXGAPpVbdiTAFQQWzkC9x0NBVrmDFo18kFYGUoQnQwI2onqSTlt7hi737sOjUloMki48NtsDLC9F7ow5IP7lg03N19DZBW",
})
