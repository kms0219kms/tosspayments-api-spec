# Toss Payments OpenAPI Specification

이 저장소는 [토스페이먼츠 API](https://docs.tosspayments.com/reference)에 대한 [OpenAPI 3.1 specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md) 파일을 제공합니다.
현재 이 저장소에서 배포되는 Spec 파일은 최신 API 버전([2022-11-16](https://docs.tosspayments.com/reference/versioning))에서만 사용할 수 있습니다.

## 사용 안내

### Spec 파일

- Spec 파일은 `specs` 폴더에서 확인할 수 있으며, 현재 코어 API의 최신 버전(2022-11-16)만 지원합니다. 조만간 다른 버전과 브랜드페이 API도 지원할 예정입니다.

### Swagger UI/Redoc 미리보기

- 이 저장소는 [GitHub Pages](https://pages.github.com/)를 사용하여 [Swagger UI](https://swagger.io/tools/swagger-ui/)와 [Redoc](https://redoc.ly/)으로 만들어진 Spec 문서를 미리 볼 수 있도록 제공하고 있습니다.

- [https://kms0219kms.github.io/tosspayments-api-spec/](https://kms0219kms.github.io/tosspayments-api-spec/ (Swagger UI)), [https://kms0219kms.github.io/tosspayments-api-spec/redoc](https://kms0219kms.github.io/tosspayments-api-spec/redoc (Redoc)) 에서 확인할 수 있습니다.

### Postman과의 연동

- Postman에서 본 Spec 파일을 사용하려면 사양 파일을 직접 다운로드하여 Postman으로 가져옴으로써 사용할 수 있습니다.

## 기여하기

- 이 문서는 사람이 만든 문서이므로 버그가 포함되어 있거나 최신 사양 업데이트가 즉시 반영되지 않을 수 있습니다. 이 경우 이 리포지토리에서 [Issue를 열거나](https://github.com/kms0219kms/tosspayments-api-spec/issues) [Pull Request를 생성](https://github.com/kms0219kms/tosspayments-api-spec/pulls)할 수 있습니다.

## 고지 사항

- 토스페이먼츠의 공식 스펙 파일이 아니므로 정확하지 않을 수 있습니다. 아래 언급된 내용 외에 Spec과 [공식 문서](https://docs.tosspayments.com/reference)가 일치하지 않는 부분이 발견되면 Issue를 통해 알려주시고, 공식 문서를 따르시기 바랍니다.

## 알려진 문제
- 최신 버전(2022-11-16)의 코어 API가 아닌 다른 사양 파일은 사양 파일이 존재하더라도 작동하지 않습니다.

- `Number` 타입과 `Integer` 유형이 혼용되어 사용됩니다. 이는 토스페이먼츠의 공식 문서에서도 동일하며, 곧 수정될 예정이라는 답변을 받았습니다.
