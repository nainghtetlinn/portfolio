export function rewriteImageUrls(repo: string, markdown: string): string {
  const rawBase = `https://raw.githubusercontent.com/nainghtetlinn/${repo}/main/`;

  // Replaces ![alt](path) where path does not start with http/https
  return markdown.replace(
    /!\[(.*?)\]\((?!https?:\/\/)(?:\.?\/)?(.*?)\)/g,
    `![$1](${rawBase}$2)`,
  );
}

export async function getRepoReadme(repo: string): Promise<string> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.raw+json",
  };

  const response = await fetch(
    `https://raw.githubusercontent.com/nainghtetlinn/${repo}/main/README.md`,
    {
      headers,
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch README: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}
