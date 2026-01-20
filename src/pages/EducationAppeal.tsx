import { motion } from 'framer-motion';
import { GraduationCap, Shield, BookOpen, ArrowLeft, Heart } from 'lucide-react';
import { NarrativeImage } from '../components/ui/NarrativeImage';
import { EDUCATION_IMAGES, IMAGES } from '../data/imageAssets';

const SQUARE_LINK = 'https://square.link/u/VFOiNlbN';

export function EducationAppeal() {
    return (
        <div className="min-h-screen bg-white pt-20 lg:pt-24">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-indigo-50 py-16 lg:py-24">
                <div className="absolute inset-0">
                    <img
                        src={IMAGES.EDUCATION.FRIENDS_BLACKBOARD}
                        alt="Children at school blackboard"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-700 mb-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 rounded-sm"
                            >
                                <ArrowLeft size={16} />
                                Back to Home
                            </a>

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 w-fit">
                                <GraduationCap size={12} />
                                Education Appeal
                            </div>

                            <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-indigo-900 sm:text-5xl">
                                Support Education
                            </h1>

                            <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                Education is the key to breaking the cycle of poverty. Your support provides books, uniforms, and safe learning environments for children who dream of a better future.
                            </p>

                            <div className="flex flex-col gap-3 border-l-2 border-indigo-200 pl-6 text-sm font-medium text-gray-500 mb-8">
                                <div className="flex items-center gap-3">
                                    <Shield className="h-5 w-5 text-indigo-600" />
                                    <span>Sadaqah Jariyah eligible</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BookOpen className="h-5 w-5 text-indigo-600" />
                                    <span>Provides books, uniforms & tuition</span>
                                </div>
                            </div>

                            <a
                                href={SQUARE_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-indigo-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Heart className="h-5 w-5 fill-white" />
                                Donate Now
                            </a>
                        </motion.div>

                        <div className="hidden lg:block" />
                    </div>
                </div>
            </section>

            {/* NARRATIVE IMAGE SECTION 1 */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <NarrativeImage
                            src={EDUCATION_IMAGES[1]}
                            alt="Student with notebook"
                            variant="feature"
                        />
                        <div>
                            <h2 className="text-3xl font-serif font-semibold text-indigo-800 mb-4 text-center">
                                Every Child Deserves to Learn
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                In many communities, children walk miles to reach overcrowded classrooms. They share worn textbooks and dream of opportunities they've only heard about.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Your donation changes that story — one child at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NARRATIVE IMAGE SECTION 2 */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-serif font-semibold text-indigo-800 mb-4 text-center">
                                Dedicated Teachers, Bright Futures
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                Our education programs support not just students, but also the teachers who guide them. We provide training, resources, and fair wages to ensure quality education.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                When teachers thrive, students succeed.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <NarrativeImage
                                src={EDUCATION_IMAGES[2]}
                                alt="Teacher helping student"
                                variant="feature"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NARRATIVE IMAGE SECTION 3 */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <NarrativeImage
                            src={EDUCATION_IMAGES[3]}
                            alt="Children in classroom"
                            variant="feature"
                        />
                        <div>
                            <h2 className="text-3xl font-serif font-semibold text-indigo-800 mb-4 text-center">
                                Safe Spaces to Learn
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                Beyond books and supplies, we ensure children have safe, dignified spaces to learn. This includes proper desks, clean facilities, and a welcoming environment.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Education flourishes when children feel secure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 lg:py-24 bg-indigo-800 text-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl font-serif font-semibold mb-4">
                        Invest in Tomorrow's Leaders
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Your support gives children the gift of knowledge and opportunity.
                    </p>
                    <a
                        href={SQUARE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-800 px-8 py-4 text-base font-bold shadow-lg transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <Heart className="h-5 w-5" />
                        Donate Now
                    </a>
                </div>
            </section>
        </div>
    );
}
