import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders revised home navigation, Linktree, and contact form", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<a href="#top">Home<\/a>/);
  assert.match(html, /href="\/contact">Contact<\/a>/);
  assert.match(html, /https:\/\/linktr\.ee\/perfectuniontheband/);
  assert.match(html, /https:\/\/youtu\.be\/xHWx9nENxV0\?si=wH2cmLaKToT0iQGZ/);
  assert.match(html, /WATCH/);
  assert.doesNotMatch(html, /music video coming soon/);
  assert.match(html, /name="inquiry_type"/);
  assert.match(html, /Merchandise Support/);
  assert.match(html, /data-captcha="true"/);
  assert.doesNotMatch(html, /Wayne|Dylan|Tommy/);
});

test("renders the contact page with all required fields", async () => {
  const response = await render("/contact/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Contact Perfect Union/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="inquiry_type"/);
  assert.match(html, /name="order_number"/);
  assert.match(html, /name="message"/);
  assert.match(html, /name="botcheck"/);
});

test("removes member names and the member list from About", async () => {
  const response = await render("/about/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.doesNotMatch(html, /Wayne|Dylan|Tommy/);
  assert.doesNotMatch(html, /class="members"|class="member-list"/);
  assert.doesNotMatch(html, /THE UNION/);
  assert.match(html, /href="\/contact">Contact<\/a>/);
});
