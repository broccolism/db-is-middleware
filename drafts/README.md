# drafts/

공부하다 빡치는 순간을 즉시 기록하는 워크스페이스.

- **inbox.md**: 1줄 메모용. 떠오르는 대로 쌓기. 매주 정리.
- **XXX-slug.md**: 다듬고 있는 초안.

`drafts/` 내용은 Docusaurus 빌드에서 **제외**됩니다 (사이트에 공개되지 않음). 준비가 끝나면 `blog/` 또는 `docs/<과목>/`으로 이동하면 됩니다.

## 새 초안 시작법

```bash
cp blog/_template.md drafts/$(date +%Y%m%d)-slug.md
```
