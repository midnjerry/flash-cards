<template>
  <main class="page">
    <section class="panel">
      <header class="panel-header">
        <div class="header-left">
          <div class="marker"></div>
          <div>
            <h2 class="title">Question Bank</h2>
            <p class="subtitle">Railroad terminology + coding concepts</p>
          </div>
        </div>

        <div class="count-pill">
          Total: <span class="count">{{ $store.state.questions.length }}</span>
        </div>
      </header>

      <div class="table-wrap" role="region" aria-label="Questions table">
        <table class="table">
          <thead>
            <tr>
              <th class="col-num">#</th>
              <th class="col-cat">Category</th>
              <th class="col-q">Question</th>
              <th class="col-a">Answer</th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="!$store.state.questions || $store.state.questions.length === 0">
              <td class="empty" colspan="4">
                No questions loaded yet. Add questions to build your training bank.
              </td>
            </tr>

            <tr
              v-for="(question, index) in $store.state.questions"
              :key="index"
              class="row"
            >
              <td class="col-num">{{ index + 1 }}</td>

              <td class="col-cat">
                <span class="cat-pill">{{ question.category }}</span>
              </td>

              <td class="col-q">
                <div class="cell-clip" :title="question.question">
                  {{ question.question }}
                </div>
              </td>

              <td class="col-a">
                <div class="cell-clip" :title="question.answer">
                  {{ question.answer }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="panel-footer">
        <div class="note">
          🚦 Tip: Keep questions short and precise—like a rulebook instruction.
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
/* BNSF Training / Operations Theme */
.page {
  padding: 18px;
  display: flex;
  justify-content: center;
}

.panel {
  width: min(1100px, 96vw);
  background: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
}

/* Left orange stripe (accent-only) */
.panel::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: #ff6a00;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;

  padding: 16px 18px 14px 18px;
  border-bottom: 2px solid #e5e7eb;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.marker {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #ff6a00;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
  color: #111827;
  letter-spacing: 0.2px;
}

.subtitle {
  margin: 4px 0 0 0;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.count-pill {
  padding: 8px 12px;
  border-radius: 8px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #111827;
  font-weight: 800;
  font-size: 13px;
  white-space: nowrap;
}

.count {
  margin-left: 6px;
  color: #111827;
}

/* Table */
.table-wrap {
  padding: 14px 18px 6px;
  overflow-x: auto; /* important on small screens */
}

.table {
  width: 100%;
  min-width: 860px; /* keeps columns readable; scrolls on mobile */
  border-collapse: collapse;
  font-size: 14px;
}

.table thead th {
  text-align: left;
  padding: 12px 10px;
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
  color: #111827;
  font-weight: 900;
}

.table tbody td {
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
  vertical-align: top;
}

.row:hover td {
  background: #f9fafb;
}

.col-num {
  width: 60px;
  color: #374151;
  font-weight: 800;
}

/* Category pill */
.col-cat {
  width: 180px;
}

.cat-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  font-size: 12px;
  font-weight: 900;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  position: relative;
}

.cat-pill::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff6a00;
  margin-right: 8px;
}

/* Clip long text nicely */
.cell-clip {
  max-width: 520px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #111827;
}

.col-a .cell-clip {
  font-weight: 600;
  color: #374151;
  max-width: 520px;
}

.empty {
  text-align: center;
  padding: 18px 10px;
  color: #6b7280;
  font-weight: 700;
}

/* Footer */
.panel-footer {
  padding: 12px 18px;
  border-top: 2px solid #e5e7eb;
  background: #ffffff;
}

.note {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

@media (max-width: 560px) {
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
