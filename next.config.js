const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/claude-enterprise-website-original' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
