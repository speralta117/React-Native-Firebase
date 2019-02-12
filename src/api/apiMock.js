import delay from './delay';

const data = {
    feed: [
        {id: "cjrwgmo2n5z950a45v7jgq7da", url: "www.prisma.io", description: "Prisma replaces traditional ORMs", __typename: "Link"},
        {id: "cjrwhfqen69ad0a45w9lqzhfa", url: "www.prisma.io", description: "Prisma replaces traditional ORMs", __typename: "Link"},
        {id: "cjrwj4hkv6u3h0a45l8ezwb2c", url: "www.graphqlconf.org", description: "An awesome GraphQL conference", __typename: "Link"},
        {id: "cjrwlshktlign0906f1z8eml0", url: "www.graphqlconf.org/hanny", description: "An awesome GraphQL conference for hanny", __typename: "Link"},
        {id: "cjrwo0kxcm5b20906s640ferk", url: "www.graphqlconf.org/hanny", description: "An awesome GraphQL conference for hanny", __typename: "Link"},
        {id: "cjrwo11je8ie20a458jb0cmms", url: "www.graphqlconf.org/hanny", description: "An awesome GraphQL conference for hanny", __typename: "Link"},
        {id: "cjrwo2jwk8iv90a45ayfci6wr", url: "www.graphqlconf.org/hanny", description: "An awesome GraphQL conference for hanny", __typename: "Link"},
        {id: "cjrwo2t0g8ixb0a45r18vku37", url: "www.graphqlconf.org/hanny", description: "An awesome GraphQL conference for hanny", __typename: "Link"}
    ]
};

class MemberApi {
    static getMembers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], data.feed));
            }, delay);
          });
    }
}

export default MemberApi;