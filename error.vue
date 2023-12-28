<template>
    <NuxtLayout>
        <div class="flex flex-col">
            <div v-if="error.statusCode === '404'" class="prose">
                <h1>404</h1>
                <p>It looks like this page doesn't exist.</p>
            </div>
            <div v-else class="prose">
                <h1>Oops!</h1>
                <p>It looks like something broke.</p>
                <p>Sorry about that.</p>
                <p>
                    <strong>{{ error.message }}</strong>
                </p>
            </div>
            <div class="prose mt-5">
                <p>
                    Go to the
                    <a
                        class="hover:cursor-pointer"
                        @click="handleError"
                    >
                        First Lesson
                    </a>
                </p>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError();
const handleError = () => {
    clearError({
        redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
        }
    );
};
</script>