import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import TextInput from '../shared/input/TextInput';
import WrapLabel from '../shared/input/WrapLabel';
import CareersInput from './CareersInput';

const schema = z.object({
  years: z
    .string()
    .min(1, '연차는 필수 입력입니다.')
    .regex(/^[0-9]*$/, '숫자만 입력하세요.'),
  role: z.string().min(1, '직무는 필수 입력입니다.'),
  careers: z.array(
    z.object({
      content: z.string(),
    })
  ),
});

export type CareerFormType = z.infer<typeof schema>;

interface CareerFormProps {
  onPrev: () => void;
}

export default function CareerForm({ onPrev }: CareerFormProps) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<CareerFormType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      careers: [{ content: '' }],
    },
  });

  return (
    <>
      <header className="pt-20 pb-1">
        <h3 className="w-fit space-y-1 text-left text-2xl text-darkGray">
          <p>이승연님의 회사는 '아주대학교'입니다.</p>
          <p>당신의 커리어를 등록해주세요.</p>
        </h3>
      </header>
      <form className="pt-6 pb-10">
        <section className="space-y-4">
          <WrapLabel label="직무" id="role" errorMessage={errors.role?.message} moreInfo="예) 웹프론트엔드, 앱디자이너, 서비스PM" required>
            <TextInput id="role" register={register('role')} type="text" placeholder="직무를 입력해주세요."></TextInput>
          </WrapLabel>
          <WrapLabel label="연차" id="years" errorMessage={errors.years?.message} moreInfo="숫자만 입력해주세요. 예) 5년차 -> 5" required>
            <TextInput id="years" register={register('years')} type="number" placeholder="연차를 입력해주세요."></TextInput>
          </WrapLabel>
          <WrapLabel label="커리어" id="careers" errorMessage={errors.careers?.message} required>
            <CareersInput
              register={register}
              name={'careers'}
              control={control}
              placeholder="가장 최신의 경력 사항부터 입력해주세요."
            ></CareersInput>
          </WrapLabel>
        </section>
        <section className="flex items-center justify-center space-x-2 pb-5 pt-10">
          <button className="rounded-full bg-darkWhite px-8 py-2 text-lg text-darkGray" type="button" onClick={onPrev}>
            이전
          </button>
          <button className="rounded-full bg-lightPurple px-8 py-2 text-lg text-darkWhite" type="button">
            등록하기
          </button>
        </section>
      </form>
    </>
  );
}