export function rewriteImageUrls(repo: string, markdown: string): string {
  const rawBase = `https://raw.githubusercontent.com/nainghtetlinn/${repo}/main/`;

  return (
    markdown
      // 1. Replaces ![alt](path) where path does not start with http/https
      .replace(
        /!\[(.*?)\]\((?!https?:\/\/)(?:\.?\/)?(.*?)\)/g,
        `![$1](${rawBase}$2)`,
      )
      // 2. Replaces <img ... src="path" ...> (supports single or double quotes)
      .replace(
        /(<img\b[^>]*?\bsrc=["'])(?!https?:\/\/)(?:\.?\/)?([^"']+)(["'])/gi,
        `$1${rawBase}$2$3`,
      )
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
