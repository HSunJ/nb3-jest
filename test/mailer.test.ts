import { expect, describe, jest, test } from '@jest/globals'

class Mailer {
  send(to: string, msg: string) {
    console.log(`📧 Sending to ${to}: ${msg}`)
    return true
  }
}

test('메일 발송', () => {
  const mailer = new Mailer()

  // mailer.send 메서드를 감시
  const sendSpy = jest.spyOn(mailer, 'send')

  // 실제 메서드 실행됨 (console.log 찍힘)
  mailer.send('kimcode@example.com', 'Welcome!')

  // Spy가 호출 기록 추적
  expect(sendSpy).toHaveBeenCalled()
  expect(sendSpy).toHaveBeenCalledWith('kimcode@example.com', 'Welcome!')
})