# Arpan Hait Portfolio

Clean AWS/cloud-engineer-style portfolio for Arpan Hait, built with React and Vite.

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The deployable static output is generated in `dist/`.

## AWS Deployment Path

1. Create an S3 bucket for static website hosting.
2. Upload the contents of `dist/` after running `npm run build`.
3. Add a CloudFront distribution pointing to the S3 bucket.
4. Use AWS Certificate Manager for HTTPS.
5. Connect a custom domain through Route 53 if needed.
