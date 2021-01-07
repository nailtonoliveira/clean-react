import { HttpPostClient } from '@/data/protocols/http/httpPostClient'
import { AuthenticationParams } from '@/domain/usecases/authentions'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
