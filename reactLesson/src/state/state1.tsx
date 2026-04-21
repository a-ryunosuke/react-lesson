import { useState } from 'react';

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');


    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // フォームの送信
        setStatus('submitting');
        try {
            // フォームの送信
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            // エラー発生時
            setStatus('typing');
            setError(err);
        }
    }

    // form値の管理
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                {/* ボタン無効化 */}
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {/* エラーメッセージ表示 */}
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
