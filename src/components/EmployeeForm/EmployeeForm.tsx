import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { EmployeeInfo } from "./types";
import {
  EmployeeErrorMessage,
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
} from "./styles";

function EmployeeForm() {
  const [userInfo, setUserInfo] = useState<EmployeeInfo>({
    name: "",
    lastName: "",
    age: "",
    jobPosition: "",
    agreement: false,
    checked: false,
  });

  const [isShowCard, setIsShowCard] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Обязательное поле")
      .min(2, "Минимальное количество символов - 2")
      .max(12, "Максимальное количество символов - 12"),
    lastName: Yup.string()
      .required("Обязательное поле")
      .max(15, "Максимальное количество символов - 15"),
    age: Yup.number()
      .required("Обязательное поле")
      .min(1, "Минимальный возраст - 1")
      .max(99, "Максимальный возраст - 99"),
    jobPosition: Yup.string().max(30, "Максимальное количество символов - 30"),
    agreement: Yup.boolean().oneOf([true], 'Необходимо согласиться с правилами использования').required('Необходимо согласиться с правилами использования'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      jobPosition: "",
      agreement: false,
      checked: false,
    },
    validationSchema,
    onSubmit: (values) => {
      setUserInfo(values);
      setIsShowCard(true);
    },
  });

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="name"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
          label="Имя*"
          placeholder="Введите Ваше имя"
        />
        {formik.errors.name ? (
          <EmployeeErrorMessage>{formik.errors.name}</EmployeeErrorMessage>
        ) : null}
        <Input
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          error={formik.errors.lastName}
          value={formik.values.lastName}
          label="Фамилия*"
          placeholder="Введите Вашу Фамилию"
        />
        {formik.errors.lastName ? (
          <EmployeeErrorMessage>{formik.errors.lastName}</EmployeeErrorMessage>
        ) : null}
        <Input
          id="age"
          name="age"
          onChange={formik.handleChange}
          error={formik.errors.age}
          value={formik.values.age}
          label="Возраст*"
          placeholder="Введите Ваш возраст"
        />
        {formik.errors.age ? (
          <EmployeeErrorMessage>{formik.errors.age}</EmployeeErrorMessage>
        ) : null}
        <Input
          id="jobPosition"
          name="jobPosition"
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
          value={formik.values.jobPosition}
          label="Должность"
          placeholder="Введите вашу должность"
        />
        {formik.errors.jobPosition ? (
          <EmployeeErrorMessage>{formik.errors.jobPosition}</EmployeeErrorMessage>
        ) : null}

        <Input
          id="agreement"
          name="agreement"
          onChange={formik.handleChange}
          checked={formik.values.agreement}
          error={formik.errors.agreement}
          label="Правила использования"
          type="checkbox"
        />
        {formik.touched.agreement && formik.errors.agreement ? (
          <div>{formik.errors.agreement}</div>
        ) : null}

        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>
      {isShowCard && (
        <EmployeeCard>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{userInfo.name}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{userInfo.age}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Должность</EmployeeTitle>
            <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
          </EmployeeInfoContainer>
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;