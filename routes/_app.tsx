import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mana-calc</title>
        <link rel="stylesheet" href="/styles.css" />
        <link href="css/mana.min.css" rel="stylesheet" type="text/css" />
        
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
