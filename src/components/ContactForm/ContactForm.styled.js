import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;
export const Btn = styled.button`

  margin-top: 10px;
  width: 100px;
  height: 25px;
  color: #333340;
  border: 1px solid #333340;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6495ED };
`