import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-');

    const newPost = `---
title: "${title}"
date: "${new Date().toISOString()}"
---

${content}
`;

    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    fs.writeFileSync(filePath, newPost);

    res.status(201).json({ message: 'Post created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
