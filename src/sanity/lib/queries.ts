import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
_id,
title,
slug,
_createdAt,
author,
views,
description, 
category, 
image
}`);
