import React from "react";
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

export default function RosePage() {
    return (
        <>
            <Navbar />

            <section className="py-16 px-6 bg-green-50 text-right rtl">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-200">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">🌹 الورد الجوري (Rosa damascena)</h2>

                    <p className="mb-4">
                        <strong>هل هو داخلي أم خارجي؟</strong><br />
                        خارجي، يحتاج إلى ضوء شمس مباشر لا يقل عن 6–8 ساعات يوميًا.
                    </p>

                    <p className="mb-4">
                        <strong>المسافة المناسبة للزراعة:</strong><br />
                        يُزرع على مسافة 1 متر بين كل شتلتين.
                    </p>

                    <div className="mb-4">
                        <strong>الظروف المثلى للزراعة:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li><strong>الحرارة:</strong> يتحمل درجات الحرارة المختلفة، ويزدهر في الدفء.</li>
                            <li><strong>الرطوبة:</strong> يفضل الرطوبة المعتدلة.</li>
                            <li><strong>الإضاءة:</strong> شمس مباشرة، لا يناسبه الظل.</li>
                            <li><strong>التربة:</strong> طينية حمراء، غنية بالمواد العضوية وجيدة التصريف.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong>طريقة العناية:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li><strong>الري:</strong> مرة إلى مرتين أسبوعيًا حسب الطقس، مع تجنب الإفراط.</li>
                            <li><strong>التقليم:</strong> مرة شهريًا، وقص الأزهار قبل أن تذبل.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong>التسميد:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>شهريًا.</li>
                            <li>سماد عضوي إن كانت الزراعة بعيدة عن السكان.</li>
                            <li>أو سماد كيميائي مثل:
                                <ul className="list-disc list-inside ml-6">
                                    <li>NPK (متوازن مثل 13-13-13)</li>
                                    <li>Wuxal (سماد سائل غني بالعناصر الدقيقة)</li>
                                    <li>Wasco (إن توفر، وهو من الأسمدة السائلة)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong>الوقاية:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>مبيد فطري: BioGuard (1.5 مل لكل لتر ماء)</li>
                            <li>مبيد حشري: Gosban أو Dursban (شهريًا لمكافحة المن والذبابة البيضاء)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong>الأمراض الشائعة:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>البياض الدقيقي (طبقة بيضاء على الأوراق)</li>
                            <li>الصدأ (بقع صفراء أو برتقالية أسفل الأوراق)</li>
                            <li>تبقع الأوراق (بقع سوداء تؤدي لتساقطها)</li>
                            <li>عفن الجذور (بسبب الرطوبة الزائدة)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <strong>ملاحظات إضافية:</strong>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>يزهر طوال العام عند تقليم الأزهار الذابلة بانتظام.</li>
                            <li>يجب قص الأزهار الذابلة بالمقص (وليس باليد) لتشجيع الإزهار الجديد.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
