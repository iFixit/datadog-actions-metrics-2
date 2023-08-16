import { PullRequestFirstCommit } from '../../../src/queries/getPullRequest'
import { GetPullRequestQuery } from '../../../src/generated/graphql'

export const exampleGetPullRequestQuery: GetPullRequestQuery = {
  repository: {
    pullRequest: {
      commits: {
        nodes: [
          {
            commit: {
              authoredDate: '2019-05-15T15:00:11Z',
              committedDate: '2019-05-15T15:11:22Z',
            },
          },
        ],
      },
    },
  },
}

export const examplePullRequestFirstCommit: PullRequestFirstCommit = {
  authoredDate: '2019-05-15T15:00:11Z',
  committedDate: '2019-05-15T15:11:22Z',
}
