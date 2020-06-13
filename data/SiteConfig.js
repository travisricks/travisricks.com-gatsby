const config = {
  siteTitle: "Travis Ricks - Software Engineer",
  siteTitleShort: "Travis Ricks",
  siteTitleAlt: "Travis Ricks",
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Travis Ricks is a full stack software engineer based in Tokyo who specializes in building modern user interfaces using JavaScript", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Travis Ricks RSS feed", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY-MM-DD", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Travis Ricks", // Username to display in the author segment.
  userEmail: "travis@travisricks.com", // Email used for RSS feed's author segment
  userTwitter: "itsTravisRicks", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tokyo, Japan", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/travisricks",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/itsTravisRicks",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:travis@travisricks.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2020. Travis Ricks", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
