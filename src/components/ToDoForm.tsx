import { useForm } from "react-hook-form";

interface IForm {
  toDo: string
}
const ToDoForm = () => {
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const onSubit = (data: IForm) => {
    console.log(data)
    setValue("toDo", "")
  }
  return (
		<div>
      <form onSubmit={handleSubmit(onSubit)}>
        <input {...register("toDo", {required: "Please write a To Do"})} placeholder="할 일을 적어주세요!"/>
        <button type="submit">추가하기</button>
      </form>
		</div>
	);
};

/*
interface IForm {
  email: string;
  password: string;
  password1: string;
  extraError?: string;
}
const ToDoForm = () => {
  const { register, handleSubmit, formState: {errors}, setError } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
      password: ""
    }
  });
  const onValid = (data: IForm) => {
    console.log("fix")
    if (data.password !== data.password1) {
      setError("password1",
      {message: "패스워드가 다릅니다."},
      {shouldFocus: true}
      );
    }
  }

  return (
		<div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 이메일만 가능합니다."
            }
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "password는 필수항목입니다.",
            minLength: {
              value: 6,
              message: "password는 6글자 이상입니다."
            }
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "password는 필수항목입니다.",
            minLength: {
              value: 6,
              message: "password는 6글자 이상입니다."
            }
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>추가하기</button>
        <span>{errors?.extraError?.message}</span>
      </form>
		</div>
	);
};
*/
export default ToDoForm;
